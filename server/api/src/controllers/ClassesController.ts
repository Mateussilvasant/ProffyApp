import { connection } from "../database/connection"
import converterHourToMinutes from "../utils/ConverterTime";
import { Request, Response } from 'express';

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

interface Class {
  week_day: string
  subject: string
  time: string
}


export default class ClassesController {

  async index(request: Request, response: Response) {
    const {
      week_day,
      subject,
      time
    } = request.query;

    const filters: Class = {
      week_day: week_day as string,
      subject: subject as string,
      time: time as string
    }

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = converterHourToMinutes(filters.time);

    const classes = await connection('classes')
      .whereExists(function () {
        this.select('class_schedule.*').from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(filters.week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', filters.subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {

    const trx = await connection.transaction();

    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      coast,
      schedule } = request.body;


    try {

      const idsUsers = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      });

      const user_id = idsUsers[0];

      const idsClasses = await trx('classes').insert({
        subject,
        coast,
        user_id
      });

      const class_id = idsClasses[0];

      const classShedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: converterHourToMinutes(scheduleItem.from),
          to: converterHourToMinutes(scheduleItem.to)
        }
      });

      await trx('class_schedule').insert(classShedule);

      await trx.commit();

      return response.status(201).send();
    } catch (e) {
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new class',
        exception: e
      })
    }
  }
}

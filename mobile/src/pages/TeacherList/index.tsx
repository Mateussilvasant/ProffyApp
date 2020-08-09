import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { styles } from './styles'
import { PageHeader } from '../../components/PageHeader'
import { TeacherItem, Teacher } from '../../components/TeacherItem'
import {
  TextInput,
  BorderlessButton,
  RectButton
} from 'react-native-gesture-handler'
import FilterIconSVG from '../../assets/images/icons/filter.svg'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage';

export function TeacherList() {

  function loadFavorites() {
    AsyncStorage.getItem('favorite_teachers').then(response => {
      if (response) {

        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavorites(favoritedTeachersIds);
      }
    })
  }

  const [favorites, setFavorites] = useState<number[]>([])
  const [teachers, setTeachers] = useState([])
  const [isFiltersVisible, setFiltersVisible] = useState(false)
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function handleToggleFilterVisible() {
    if (isFiltersVisible) {
      setFiltersVisible(false)
    } else {
      setFiltersVisible(true)
    } 
  }

  async function handleFiltersSubmit() {

    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title='Proffys disponíveis'
        childrenRight={
          <BorderlessButton
            style={styles.buttonFilter}
            onPress={handleToggleFilterVisible}
          >
            <FilterIconSVG />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholder='Qual a matéria? '
              placeholderTextColor='#c1bccc'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder='Qual o dia?'
                  placeholderTextColor='#c1bccc'
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder='Qual horário?'
                  placeholderTextColor='#c1bccc'
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />
        })}
      </ScrollView>
    </View>
  )
}

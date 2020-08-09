import React, { useState } from 'react';
import {View,ScrollView,Text} from 'react-native';
import { styles } from './styles';
import { PageHeader } from '../../components/PageHeader';
import { TeacherItem } from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import FilterIconSVG from '../../assets/images/icons/filter.svg' 


export function TeacherList(){

    const [isFiltersVisible,setFiltersVisible] = useState(false);

    function handleToggleFilterVisible(){
        if(isFiltersVisible){
            setFiltersVisible(false);
        } else {
            setFiltersVisible(true);
        }
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" childrenRight={
                (    <
                BorderlessButton  style={styles.buttonFilter} onPress={handleToggleFilterVisible}>
                    <FilterIconSVG/>
                </BorderlessButton>)
            }>
                
                { isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Qual a matéria? "
                    placeholderTextColor="#c1bccc"
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>     
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>)}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            
            >
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>
    );
}
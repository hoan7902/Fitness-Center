import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
// import { Details } from '@mui/icons-material'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exercisesVideo, setExercisesVideo] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exercisesDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exercisesDetailData)

      const exercisesVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exercisesDetailData.name}`, 
      youtubeOptions)
      setExercisesVideo(exercisesVideoData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exercisesDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(targetMuscleExercisesData)
    }
    fetchExercisesData()
  }, [id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exercisesVideo={exercisesVideo} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail

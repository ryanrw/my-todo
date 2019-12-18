import React from 'react'

import { DateContainer, Month, Body, EventDate } from './styling/date'

interface DateData {
  data: {
    at: Number
    day: string
    month: string
    year: Number
  }
}

export const Date: React.FC<DateData> = ({ data }) => {
  return (
    <DateContainer>
      <Month>{data.month.toUpperCase()}</Month>
      <Body>
        <div>{data.day}</div>
        <EventDate>{data.at}</EventDate>
        <div>{data.year}</div>
      </Body>
    </DateContainer>
  )
}

import React from 'react'

export const shortendText = (text,n) => {
    if (text.length) {
        const shortendText=text.substring(0,n).concat("...")
        return shortendText
    }
  return  text
}

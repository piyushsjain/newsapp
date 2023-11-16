import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="..." className='w-10 mx-auto' />
      </div>
    )
  }
}

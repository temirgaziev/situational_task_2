import React, { useState } from 'react'
import Header from '../../components/header/Header'

const NotFound = () => {
	const [info, setInfo] = useState()
  return (
    <>
      <Header setInfo={setInfo} info={info} />
      <div className="content">NotFound</div>
    </>
  );
}

export default NotFound
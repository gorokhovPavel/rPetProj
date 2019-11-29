import React, { useState, useEffect } from 'react'
import './style.css'

function Content() {
  const helloText = 'привет, как дела?';
  const rndNumArr = [1,2,3,4,5,6].map(()=>Math.floor(Math.random()*100));

  const [isShowForm, setShowForm] = useState(false);
  const [isShowTable, setShowTable] = useState(true);
  
  const formItemList = rndNumArr.map((item, index)=> 
    <p key={index}>{item}</p>
  );
  const contentForm = isShowForm && (
    <form id='formContent' >
      {formItemList}
    </form>
  );

  const contentTable = isShowTable && (
    <>
      <table id='tableContent' className='collapsed hiddEmpCells' >
        <caption class='captBott' >Новинки</caption>
        <thead>
          <th>index</th>
          <th>value</th>
        </thead>
        <tbody>
          { 
            rndNumArr.map((item, index)=>
              <tr key={index} >
                <td>
                  {index}
                </td>
                <td>
                  
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );

  useEffect(() => {
    document.title = `${isShowForm}`
  }, [isShowForm] );

  return (
    <div className='content' >
      <span id='headInContent' className='block' >{helloText}</span>
      <button id='buttForm' className='pointer block' onClick={() => setShowForm(!isShowForm)}>
        { !isShowForm ? 'Show' : 'Hide'}
      </button>
      {contentForm}
      <button id='buttForm' className='pointer block' onClick={() => setShowTable(!isShowTable)}>
        { !isShowTable ? 'Show' : 'Hide'}
      </button>
      {contentTable}
    </div>
  )
}

export default Content;
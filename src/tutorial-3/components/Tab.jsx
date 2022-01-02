import React from 'react'

function Tab({ question, activateTab, active }) {
  return (
    <div className={`tab ${active ? 'active' : ''}`}>
      <input id="tab-one" type="checkbox" name="tabs" />
      <label
        for="tab-one"
        onClick={() => {
          activateTab(question.id)
        }}
      >
        {question.title}
      </label>
      <div className="tab-content">
        <p>{question.description}</p>
      </div>
    </div>
  )
}

export default Tab

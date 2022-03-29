import './TabItem.scss'

const TabItem = ({stepNo, step, active}) => {
  return (
    <div className='tabItem' style={active ? {borderTop: "4px solid palevioletred" } : {borderTop: ""}}>
      <div>
        {stepNo}
      </div>
      <div>
        {step}
      </div>
    </div>
  )
}

export default TabItem



import React,{PureComponent} from 'react'
import {RecommendWrap,  RecommendItem} from '../style'
import { connect } from 'react-redux'
class Recommend extends PureComponent{
  render(){
    return (
      <RecommendWrap>
        {
          this.props.list.map((item)=>{
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>

            </RecommendItem>
          })
        }
      </RecommendWrap>
    )
  }
}
const mapStateToProps = (state)=>({
  list: state.getIn(['home', 'recommentList'])
})
export default connect(mapStateToProps)(Recommend)
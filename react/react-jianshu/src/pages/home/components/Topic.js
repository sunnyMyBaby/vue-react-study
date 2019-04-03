import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import {TopicWrapper, TopicItem} from '../style'

class Topic extends PureComponent{
  render(){
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item)=>{
            return  <TopicItem key={item.get('title')}>
                       <img className="topic-pic" src={item.get('src')} alt=''/>
                       <span>{item.get('title')}</span>
                    </TopicItem>
          })
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state)=>({
  topicList: state.getIn(['home','topicList'])
})
export default connect(mapStateToProps, null)(Topic)
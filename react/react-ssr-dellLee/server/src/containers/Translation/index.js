
import React, {Component, Fragment} from 'react'
// import Header from '../../components/Header/'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom';// 判断用户是否登录
import { Helmet } from 'react-helmet'
class Translation extends Component {

  getList() {
    const { list } = this.props;
    return list.map((item)=> <div key={item.id}>{item.title}</div>)
  }
  render (){
      return this.props.login ? (
        <Fragment>
          <Helmet>
            <title>这是Transtion页面-</title>
            <meta name="description" content="这是一个自己学习研究的react-ssr框架"/>
          </Helmet>
          <div>
            {
              this.getList()
            }
          </div>
        </Fragment>
      ) : <Redirect to="/" />
  }
  componentDidMount() {
  if(!this.props.list.length){
      this.props.getTranslationList()
    }
  }
}
// Translation.loadData = (store) => {
//   return store.dispatch(getTranslationList(true))
// }
const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
})
const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(Translation);
ExportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList(true));
}
export default ExportTranslation;

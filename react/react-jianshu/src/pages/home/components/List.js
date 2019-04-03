import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../../../store/home'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    // console.log(this.props.list)
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            console.log(item);
            return (
              // 这里其实也可以用a标签，但是呢a标签跳转回多次加载html，而单页引用只加载一次不符合单页应用的规则
              <Link  key={item.get('id')} to={'/detail/' + item.get('id')}>
              {/* <Link  key={item.get('id')} to={'/detail?id=' + item.get('id')}> */}
                <ListItem>
                  <img className="pic" src={item.get('src')} alt='' />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={this.props.getMoreList}>更多内容</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
const mapDispatch = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreInfo());
  }
})
export default connect(mapStateToProps, mapDispatch)(List)
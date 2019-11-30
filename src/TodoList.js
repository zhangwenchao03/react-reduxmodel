import React, {useMemo,useRef,useCallback} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeInputAction,addListAction, deleteItemAction} from './store/actionCreator'
const TodoList = (props) => {
  const {
    inputValue,
    list,
    dispatch,
  } = props;
  const changeInputCbs= useMemo(() => {
    return bindActionCreators(
        {
            onChange: changeInputAction,
            addList: addListAction
        },
        dispatch
      );
    }, []);
    const listCbs= useMemo(() => {
      return bindActionCreators(
          {
              deleteItem: deleteItemAction,
          },
          dispatch
        );
      }, []);
  return (
      <div>
        <InputCom inputValue = {inputValue} {...changeInputCbs}/>
        <ul>
          <Todos list = {list} {...listCbs}/>

        </ul>
      </div>
    )
}
function InputCom (props) {
  const {inputValue,onChange,addList} = props;
  const inputRef = useRef();
  const onClick = useCallback(()=>{
    addList();
  },[])
  return (
    <div>
      <input ref = {inputRef} value = {inputValue} onChange={(e)=>onChange(e.target.value)}></input>
      <button onClick={()=>{addList()}}>提交</button>
    </div>
  )
}
function Todos(props) {
  const {list,deleteItem} = props;
  return (
    list.map((item,index)=>{
    return <li key={index} 
              onClick = {()=>{deleteItem(index)}}
           >{item}</li>
    })
  )
}
//store的数据和组件的props数据关联
// const mapStateToProps = (state) => {
//   return {
//     inputValue: state.inputValue,
//     list: state.list
//   }
// }
// // 修改store数据 把props与dispatch关联
// const mapDispatchToProps = (dispatch) => (
//   {
//     changeInputValue(e) {
//       const action = changeInputAction(e.target.value)
//       dispatch(action);
//     },
//     handleBtnClick () {
//       const action = addListAction
//       dispatch(action);
//     },
//     handleDeleteItemClick (index) {
//       const action = deleteItemAction(index)
//       dispatch(action)
//     }
//   }
// )
const mapStateToProps = (state) => {
  return state
}
// 修改store数据 把props与dispatch关联
const mapDispatchToProps = (dispatch) => (
 {
   dispatch
 }
)
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
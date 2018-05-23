import * as SettingsActions from './SettingsActions'
import * as ChatActions from './ChatActions'

export default {
  changeName: SettingsActions.changeName,
  changeNodesNumber: SettingsActions.changeNodesNumber,
  changeLevelsNumber: SettingsActions.changeLevelsNumber,
  updateNodeList: SettingsActions.updateNodeList,
  addChat: ChatActions.addChat,
  changeStatus: ChatActions.changeStatus,
  changeUserName: ChatActions.changeUserName
};

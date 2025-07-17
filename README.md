# MyGameCfg
MyGameCfg为客户端配置表，MyGame.xlsx配置表内容，#Export.xlsx导出时所需信息，导出表与内容表保持页签一致，第一行第一列标记表的类型，暂时支持list（列表）和constant（常数）类型，第一行第二列为导出的json信息和类名，第二行起为字段说明，第一列为内容表对应字段，第二列为字段名，第三列为类型。  
导出执行:```node xlsxToJson.js```。  
目标目录为:MyGameClient/assets/resources/json
# MyGameClient
客户端使用Laya、fgui  
游戏启动入口 LoadScene.ts  
通讯协议proro  
通讯脚本GameNetMgr.ts
通讯回调注册MsgHandler.ts  
帧同步管理器BattleFrameSyncMgr.ts  
## 帧同步移动基础逻辑
帧同步基础构造为渲染帧和逻辑帧分离，所有客户端的逻辑帧需要和服务端的逻辑帧保持一致，维持玩家逻辑帧的位置，渲染帧负责平滑渲染，实际逻辑使用逻辑帧位置，当逻辑帧位置和渲染帧位置相差过大时需要强制修改渲染帧位置使渲染帧保持逻辑帧位置  
### 逻辑帧  
逻辑帧处理服务端转发来的客户端输入数据，当玩家触发移动时发送移动操作给服务器，服务器在下一逻辑帧时将收到的所有玩家操作转发给所有玩家，玩家根据移动数据维护逻辑帧位置  
### 渲染帧
渲染帧处理负责平滑游戏画面，由于服务器逻辑帧间隔为33ms（固定）每帧，客户端渲染为60帧/秒（不固定），所以渲染是分离逻辑帧的，接收到逻辑帧的移动操作，渲染帧平滑处理移动即可。  
# MyGameProto
proto定义文件  
# MyGameServer  
服务器使用node WebSocketServer mysql,WebSocketServer监听客户端的连接和断开以及接收客户端消息，服务器启动入口index.ts  
## 注册客户端消息回调  
使用装饰器@Handler(msgId),对应脚本需要在index里new出实例。  
## 帧同步脚本```BattleRoom```  
游戏开始后间隔33ms将收集到的玩家操作同步给所有玩家，只同步操作不做数据处理。  
# MyGameUI  
fgui工程

const express = require('express');
const app = express();
app.listen(7777, () => console.log(`Server started, on port ${7777}`));

app.use(express.json());


// id -> {userid, title, description}
let db = new Map();
let id = 1;

app
  .route('/channels')
  .post((req, res) => {
    const { channelTitle } = req.body;
    if (!(channelTitle)) {
      res.status(400).json({
        message: `양식이 잘못 되었을 수 있습니다`
      });
    }
    else {
      db.set((id++).toString(), {
        channelTitle: channelTitle
      });
      res.status(201).json({
        message: `${channelTitle} 채널이 생성되었습니다`
      })
    }
})// 채널 생성
  .get((req, res) => {
    if (!db.size) {
      res.status(404).json({
        message: "채널이 존재하지 않습니다"
      });
    }
    else {
      res.status(200).json([...db.values()]);
    }
})// 채널 전체 조회
app
  .route('/channels/:id')
  .put((req, res) => {
    const { id } = req.params;
    const { channelTitle } = req.body;
    if (!db.has(id)) {
      res.status(404).json({
        message: `해당하는 채널이 존재하지 않습니다`
      });
    }
    else {
      const channel = db.get(id);
      db.set(id, {
        ...channel,
        channelTitle: channelTitle
      });
      res.status(200).json({
        message: `해당하는 채널이 ${channel.channelTitle}에서 ${channelTitle}로 변경되었습니다`
      });
    }
})// 채널 개별 수정
  .delete((req, res) => {
    const { id } = req.params;
    if (!db.has(id)) {
      res.status(404).json({
        message: `해당하는 채널이 존재하지 않습니다`
      });
    }
    else {
      const { channelTitle } = db.get(id); 
      db.delete(id);
      res.status(200).json({
        message: `${channelTitle} 채널이 삭제되었습니다`
      })
    }
})//채널 개별 삭제
  .get((req, res) => {
    const { id } = req.params;
    if (!db.has(id)) {
      res.status(404).json({
        message: `해당하는 채널이 존재하지 않습니다`
      });
    }
    else {
      res.status(200).json(db.get(id));
    }
});//채널 개별 조회
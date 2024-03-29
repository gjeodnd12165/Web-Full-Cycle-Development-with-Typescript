const express = require('express');
const router = express.Router();

router.use(express.json());


// id -> {userid, title, description}
let db = new Map();
let id = 1;

router
  .route('/')
  .post((req, res) => {
    const { channelTitle, userId } = req.body;
    if (!(channelTitle && userId)) {
      res.status(400).json({
        message: `양식이 잘못 되었을 수 있습니다`
      });
    }
    else if ([...db.keys()].includes(userId)) {
      res.status(404).json({
        message: `해당하는 유저가 없습니다`
      });
    }
    else {
      db.set((id++).toString(), {
        channelTitle: channelTitle,
        userId: userId
      });
      res.status(201).json({
        message: `${channelTitle} 채널이 생성되었습니다`
      });
    }
})// 채널 생성
  .get((req, res) => {
    const { userId } = req.body;
    if (!userId) {
      res.status(404).json({
        message: "로그인이 필요한 페이지입니다"
      });
    }
    else {
      const filtered = [...db.values()].filter((channel) => {
        return channel.userId === userId;
      });
      if (!filtered.length) {
        channelNotFound();
      }
      else {
        res.status(200).json([...db.values()].filter((channel) => {
          return channel.userId === userId;
        }));
      }
    }
})// 채널 전체 조회
router
  .route('/:id')
  .put((req, res) => {
    const { id } = req.params;
    const { channelTitle } = req.body;
    if (!db.has(id)) {
      channelNotFound();
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
      channelNotFound();
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
      channelNotFound();
    }
    else {
      res.status(200).json(db.get(id));
    }
});//채널 개별 조회

const channelNotFound = () => {
  res.status(404).json({
    message: `해당하는 채널이 존재하지 않습니다`
  });
}

module.exports = router;
const express = require('express');

const app = express();


let youtuber1 = {
  channelTitle: "십오야",
  sub: "593만명",
  videoNum: "993개"
}
let youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만명",
  videoNum: "6.6천개"
}
let youtuber3 = {
  channelTitle: "테오",
  sub: "54.8만명",
  videoNum: "726개"
}
// @15ya.fullmoon
// @ChimChakMan_Official
// @TEO_universe

app.get('/:nickname', (req, res) => {
  const { nickname } = req.params;

  if (nickname === "@15ya.fullmoon") {
    return res.json(youtuber1);
  } else if (nickname === "@ChimChakMan_Official") {
    return res.json(youtuber2);
  } else if (nickname === "@TEO_universe") {
    return res.json(youtuber3);
  } else {
    return res.json({
      message: "모르는 유튜버"
    });
  }
});

app.listen(8888);
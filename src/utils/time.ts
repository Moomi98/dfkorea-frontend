export const createdAtString = (time: number): string => {
  const msgap = Date.now() - time;
  const minute = 60000;

  const minuteGap = Math.floor(msgap / minute);
  const hourGap = Math.floor(msgap / (minute * 60));
  const dayGap = Math.floor(msgap / (minute * 60 * 60));
  const monthGap = Math.floor(msgap / (minute * 60 * 60 * 60));

  if (minuteGap === 0) return "방금 전";
  else if (minuteGap < 60) return `${minuteGap}분 전`;
  else if (minuteGap >= 60 && hourGap < 24) return `${hourGap}시간 전`;
  else if (hourGap >= 24 && dayGap < 31) return `${dayGap}일 전`;
  else
    return new Date(time).toLocaleDateString("ko-kr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
};

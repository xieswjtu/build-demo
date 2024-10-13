//数组去重 数组里面有数组和对象
function myDeepUnique(arr) {
    const seen = new Set();
  
    return arr.filter(item => {
      const strItem = JSON.stringify(item)//将数组和对象转成JSON字符串
      if (seen.has(strItem)) {
        return false;
      } else {
        seen.add(strItem);
        return true;
      }
    });
  }
  
  // 示例使用
  const data = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    [1, 2, 3],
    [1, 2, 3],
    1,
    2,
    'hello',
    'hello'
  ];

  console.log(myDeepUnique(data))
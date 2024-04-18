const axios = require('axios');
const cheerio = require('cheerio');

// 定义要抓取的网页URL
const url = 'https://www.douban.com/';

// 发送HTTP请求并获取网页内容
axios.get(url)
  .then(response => {
    // 解析网页内容
    const html = response.data;
    const $ = cheerio.load(html);

    // 示例：获取网页标题
    const title = $('title').text();
    console.log('网页标题:', title);

    // 示例：获取所有链接
    const links = [];
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      links.push(href);
    });
    console.log('所有链接:', links);
  })
  .catch(error => {
    console.error('获取网页内容时出错:', error);
  });

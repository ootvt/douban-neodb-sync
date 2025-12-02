import { consola } from 'consola';
import { fetchRSSFeeds, handleRSSFeeds } from './handle-rss';
// import handleNotion from './handle-notion'; // 1. 删除或注释掉 Notion 处理函数的导入
import handleNeodb from './handle-neodb';
import { ItemStatus } from './types'; // 2. 如果不需要根据状态过滤（例如只同步"看过"的），这个也可以删除

async function main(): Promise<void> {
  const feeds = await fetchRSSFeeds();
  if (feeds.length === 0) {
    consola.info('No new items.');
    return;
  }

  const normalizedFeeds = handleRSSFeeds(feeds);
  
  // 3. 删除或注释掉针对 Notion 的过滤逻辑 (原逻辑只同步 ItemStatus.Complete 的条目到 Notion)
  // const completeFeeds = normalizedFeeds.filter(f => f.status === ItemStatus.Complete);

  // 4. 删除或注释掉调用 handleNotion 的部分
  // if (completeFeeds.length) {
  //   await handleNotion(completeFeeds);
  // }

  // 5. 保留 NeoDB 的同步调用
  // 注意：原代码中 handleNeodb 使用的是 normalizedFeeds (包含想看/在看/看过等所有状态)
  await handleNeodb(normalizedFeeds);
}

main();

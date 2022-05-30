'use strict';

class NotificationItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item); 
  }
  
  static parseItem(item) {
    if (item.notificationRenderer) {
      const notification = item.notificationRenderer;
      
      return {
        title: notification?.shortMessage?.simpleText,
        sent_time: notification?.sentTimeText?.simpleText,
        timestamp: notification.notificationId,
        channel_name: notification?.contextualMenu?.menuRenderer?.items[1]?.menuServiceItemRenderer?.text?.runs[1]?.text || 'N/A',
        channel_thumbnail: notification?.thumbnail?.thumbnails[0],
        video_thumbnail: notification?.videoThumbnail?.thumbnails[0],
        video_url: notification.navigationEndpoint.watchEndpoint && `https://youtu.be/${notification.navigationEndpoint.watchEndpoint.videoId}` || 'N/A',
        read: notification.read
      };
    }
  }
}

module.exports = NotificationItem;
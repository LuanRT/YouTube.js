import Parser, { RawNode } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import VideoOwner from './VideoOwner.js';
import SubscribeButton from './SubscribeButton.js';
import MetadataRowContainer from './MetadataRowContainer.js';
import { YTNode } from '../helpers.js';

class VideoSecondaryInfo extends YTNode {
  static type = 'VideoSecondaryInfo';

  owner: VideoOwner | null;
  description: Text;
  subscribe_button: SubscribeButton | Button | null;
  metadata: MetadataRowContainer | null;
  show_more_text: string;
  show_less_text: string;
  default_expanded: string;
  description_collapsed_lines: string;

  constructor(data: RawNode) {
    super();
    this.owner = Parser.parseItem(data.owner, VideoOwner);
    this.description = new Text(data.description);

    if (Reflect.has(data, 'attributedDescription')) {
      this.description = new Text(this.#convertAttributedDescriptionToRuns(data.attributedDescription));
    }

    this.subscribe_button = Parser.parseItem(data.subscribeButton, [ SubscribeButton, Button ]);
    this.metadata = Parser.parseItem<MetadataRowContainer>(data.metadataRowContainer, MetadataRowContainer);
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }

  #convertAttributedDescriptionToRuns(description: RawNode) {
    const runs: {
      text: string,
      navigationEndpoint?: RawNode,
      attachment?: RawNode
    }[] = [];

    const content = description.content;
    const command_runs = description.commandRuns;

    let last_end_index = 0;

    if (command_runs) {
      for (const item of command_runs) {
        const length: number = item.length;
        const start_index: number = item.startIndex;

        if (start_index > last_end_index) {
          runs.push({
            text: content.slice(last_end_index, start_index)
          });
        }

        if (Reflect.has(item, 'onTap')) {
          let attachment = null;

          if (Reflect.has(description, 'attachmentRuns')) {
            const attachment_runs = description.attachmentRuns;

            for (const attatchment_run of attachment_runs) {
              if ((attatchment_run.startIndex - 2) == start_index) {
                attachment = attatchment_run;
                break;
              }
            }
          }

          if (attachment) {
            runs.push({
              text: content.slice(start_index, start_index + length),
              navigationEndpoint: item.onTap,
              attachment
            });
          } else {
            runs.push({
              text: content.slice(start_index, start_index + length),
              navigationEndpoint: item.onTap
            });
          }
        }

        last_end_index = start_index + length;
      }

      if (last_end_index < content.length) {
        runs.push({
          text: content.slice(last_end_index)
        });
      }
    } else {
      runs.push({
        text: content
      });
    }

    return { runs };
  }
}

export default VideoSecondaryInfo;
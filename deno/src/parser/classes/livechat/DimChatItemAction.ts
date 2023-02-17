import { YTNode } from '../../helpers.ts';

class DimChatItemAction extends YTNode {
  static type = 'DimChatItemAction';

  client_assigned_id: string;

  constructor(data: any) {
    super();
    this.client_assigned_id = data.clientAssignedId;
  }
}

export default DimChatItemAction;
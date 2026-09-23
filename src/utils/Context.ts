import { UserInfo_DelegationContext, UserInfo_DelegationContext_RoleType_ChannelRoleType } from '../../protos/generated/youtube/api/pfiinnertube/user_info.js';
import type { Context, PartialContext } from '../core/index.js';
import { u8ToBase64 } from './Utils.js';

export function channelUserDelegationContext(channel_id: string): PartialContext['user'] {
  const delegation_context: Required<Context['user']['delegationContext']> = {
    externalChannelId: channel_id,
    roleType: {
      channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
    }
  };
  return {
    delegationContext: delegation_context,
    serializedDelegationContext: u8ToBase64(UserInfo_DelegationContext.encode({
      externalChannelId: channel_id,
      roleType: { channelRoleType: UserInfo_DelegationContext_RoleType_ChannelRoleType.CREATOR_CHANNEL_ROLE_TYPE_OWNER }
    }).finish())
  };
}
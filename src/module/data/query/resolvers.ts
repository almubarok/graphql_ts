import { handleError, errors } from '../../../shared';
import I from './interfaces';

export const getDatas: I['getDatas'] = async (_src, args, ctx) => {
  try {
    const limit = args.limit || 10;
    const offset = limit * (args.page || 0);
    const device = await ctx.prisma.device.findFirst({
      where: { owner_id: ctx.userId, id: args.device_id },
    });
    if (!device) throw errors.fieldInvalid('device_id');

    const datas = await ctx.prisma.data.findMany({
      where: { device_id: args.device_id },
      take: limit,
      skip: offset,
    });
    return datas;
  } catch (error) {
    throw handleError(error);
  }
};

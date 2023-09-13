import axios from './lib/axios';
import { GeoType, HLType } from './types';

interface GetDailyTrendsParamsType {
	geo: GeoType;
	category: string;
	hl: HLType;
}

export class GoogleTrends {
	static async getDailyTrends({
		geo = 'US',
		hl = 'en-US',
		category = 'all'
	}: GetDailyTrendsParamsType) {
		try {
			const res = await axios.get(
				'/trends/api/dailytrends?geo=IN&hl=en-GB&category=all',
				{
					params: {
						category,
						hl,
						geo
					}
				}
			);
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default GoogleTrends;

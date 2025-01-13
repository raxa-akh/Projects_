import { BaseApiModule } from './base-api-module'

type Station = {
	id: number
	name: string
}

class NowPlaying extends BaseApiModule {
	async get() {
		return this.instance.get<
			{
				station: Station
			}[]
		>('/nowplaying')
	}
	async getById(id: string | number) {
		return this.instance.get<any>('/nowplaying/' + id)
	}
}

export default NowPlaying

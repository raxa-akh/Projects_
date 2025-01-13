import { BaseApiModule } from './base-api-module'

type Station = {
	id: number
	name: string
}

class Recomendation extends BaseApiModule {
	async get(id : string | number) {
		return this.instance.get<
			{
				station: Station
			}[]
		>('/station/'+ id + "/files")
	}
	async getById(id: string | number) {
		return this.instance.get<any>('/station/' + id + '/files')
	}
}

export default Recomendation

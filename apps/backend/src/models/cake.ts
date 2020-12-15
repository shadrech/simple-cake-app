import { Cake } from '~dbModels/cake';

interface CakeKeys extends Pick<Cake, 'name' | 'comment' | 'imageUrl' | 'yumFactor'> {}

class CakeModel {
  create(cake: CakeKeys) {
    return Cake.create(cake);
  }

  delete(id: string) {
    return Promise.all([
      Cake.destroy({ where: { id } }),
    ])
  }

  update(id: string, params: Partial<CakeKeys>) {
    return Cake.update(params, { where: { id } });
  }

  fetch() {
    return Cake.findAll();
  }

  fetchById(id: string) {
    return Cake.findOne({ where: { id } });
  }
}

export const cakeModel = new CakeModel();

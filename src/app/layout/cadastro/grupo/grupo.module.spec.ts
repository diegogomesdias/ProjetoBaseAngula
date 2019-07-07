import { GrupoModule } from './grupo.module';

describe('GrupoModule', () => {
    let grupoModule: GrupoModule;

    beforeEach(() => {
        grupoModule = new GrupoModule();
    });

    it('should create an instance', () => {
        expect(grupoModule).toBeTruthy();
    });
});

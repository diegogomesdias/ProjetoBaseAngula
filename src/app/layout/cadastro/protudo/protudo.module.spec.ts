import { ProtudoModule } from './produto.module';

describe('ProtudoModule', () => {
    let module: ProtudoModule;

    beforeEach(() => {
        module = new ProtudoModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});

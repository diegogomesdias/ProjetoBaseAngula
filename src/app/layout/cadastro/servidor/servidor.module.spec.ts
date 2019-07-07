import { ServidorModule } from './servidor.module';

describe('ServidorModule', () => {
    let module: ServidorModule;

    beforeEach(() => {
        module = new ServidorModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});

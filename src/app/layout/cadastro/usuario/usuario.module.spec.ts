import { UsuarioModule } from './usuario.module';

describe('ServidorModule', () => {
    let module: UsuarioModule;

    beforeEach(() => {
        module = new UsuarioModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});

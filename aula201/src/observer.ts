interface Observer {
            update(evento: string): void;
        }

        class Painel implements Observer {
            update(evento: string) {
                console.log('Painel: ' + evento);
            }
        }

        class LuzDeFreio implements Observer {
            update(evento: string) {
                console.log('Luz de freio ativada: ' + evento);
            }
        }

        class Freio {
            private observers: Observer[] = [];
            
            registrar(observer: Observer) {
                this.observers.push(observer);
            }

            pressionar() {
                console.log('Freio pressionado!');
                this.notificar('Freio acionado');
            }

            private notificar(evento: string) {
                this.observers.forEach(o => o.update(evento));
            }
        }

        const freio = new Freio();
        const painel = new Painel();
        const luz = new LuzDeFreio();

        freio.registrar(painel);
        freio.registrar(luz);
        freio.pressionar();

import React, { useState } from 'react';
import { PageRoute, QuoteFormData } from '../types';
import { CONFIG } from '../config';
import { trackEvent, openWhatsApp } from '../services/analytics';
import { Calculator, Car, Bike, Truck, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, User, Phone, Check } from 'lucide-react';

interface CotacaoPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const CotacaoPage: React.FC<CotacaoPageProps> = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    vehicleType: 'carro',
    licensePlate: '',
    brand: '',
    model: '',
    manufactureYear: '2022',
    modelYear: '2023',
    fuelType: 'flex',
    estimatedFipeValue: 'R$ 65.000,00',
    usageType: 'particular',
    ownerName: '',
    ownerCpf: '',
    birthDate: '',
    zipCode: '',
    city: 'São Paulo',
    state: 'SP',
    phoneWhatsapp: '',
    email: '',
    acceptedTerms: true
  });

  const [submitted, setSubmitted] = useState(false);

  const updateForm = (fields: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (step === 1) {
      trackEvent('quote_start', { vehicleType: formData.vehicleType });
    }
    setStep(prev => Math.min(prev + 1, 6));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('quote_submit', {
      vehicleType: formData.vehicleType,
      brand: formData.brand,
      model: formData.model
    });
    setSubmitted(true);
  };

  const handleSendWhatsapp = () => {
    const text = `*NOVA SOLICITAÇÃO DE COTAÇÃO - HARMONY CLUBE*
---------------------------------------
*Tipo:* ${formData.vehicleType.toUpperCase()}
*Placa:* ${formData.licensePlate || 'Não informada'}
*Veículo:* ${formData.brand} ${formData.model}
*Ano:* ${formData.manufactureYear}/${formData.modelYear}
*Uso:* ${formData.usageType}
---------------------------------------
*Nome:* ${formData.ownerName}
*CPF:* ${formData.ownerCpf}
*Cidade/UF:* ${formData.city}/${formData.state}
*Telefone/Whats:* ${formData.phoneWhatsapp}
*E-mail:* ${formData.email}`;

    openWhatsApp(text);
  };

  return (
    <div className="w-full space-y-10 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-4 h-4" />
          SIMULADOR ON-LINE RÁPIDO
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
          Cotação de Proteção Veicular
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg mx-auto">
          Preencha os passos abaixo para receber o cálculo personalizado de assistência e socorro mútuo para seu veículo.
        </p>

        {/* Step Progress Indicator */}
        {!submitted && (
          <div className="pt-4 flex items-center justify-center gap-2 max-w-xs mx-auto">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div
                key={num}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  num === step
                    ? 'bg-orange-500 shadow-md shadow-orange-500/30'
                    : num < step
                    ? 'bg-emerald-500'
                    : 'bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Main Form Container */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl">
          
          {submitted ? (
            /* Success View */
            <div className="text-center space-y-6 py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Solicitação Registrada com Sucesso!
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Sua cotação para o veículo <strong>{formData.brand} {formData.model}</strong> foi recebida. Um consultor especialista da Harmony entrará em contato.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendWhatsapp}
                  className="px-6 py-3.5 rounded-xl font-extrabold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  ACELERAR ATENDIMENTO NO WHATSAPP
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 transition-colors"
                >
                  SIMULAR OUTRO VEÍCULO
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Tipo de Veículo */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Etapa 1 de 6: Qual é a categoria do seu veículo?
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { type: 'carro', label: 'Carro / Passeio', icon: Car },
                      { type: 'moto', label: 'Motocicleta', icon: Bike },
                      { type: 'caminhonete', label: 'Caminhonete / Picape', icon: Truck },
                    ].map(item => {
                      const IconComp = item.icon;
                      const selected = formData.vehicleType === item.type;
                      return (
                        <button
                          key={item.type}
                          type="button"
                          onClick={() => updateForm({ vehicleType: item.type as any })}
                          className={`p-6 rounded-2xl border text-center space-y-3 transition-all flex flex-col items-center ${
                            selected
                              ? 'border-orange-500 bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-2 ring-orange-500/30'
                              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <IconComp className="w-10 h-10" />
                          <span className="font-bold text-xs">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Dados do Veículo */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Etapa 2 de 6: Dados do Veículo
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Placa do Veículo (Opcional)
                      </label>
                      <input
                        type="text"
                        placeholder="ABC-1234 ou ABC1D23"
                        value={formData.licensePlate}
                        onChange={(e) => updateForm({ licensePlate: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Marca (Fabricante) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Chevrolet, Volkswagen, Honda..."
                        value={formData.brand}
                        onChange={(e) => updateForm({ brand: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Modelo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Onix 1.0 Turbo, Gol, Civic..."
                        value={formData.model}
                        onChange={(e) => updateForm({ model: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Uso do Veículo
                      </label>
                      <select
                        value={formData.usageType}
                        onChange={(e) => updateForm({ usageType: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="particular">Passeio / Particular</option>
                        <option value="aplicativo">Transporte por Aplicativo (Uber/99)</option>
                        <option value="comercial">Comercial / Empresa</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Proprietário */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Etapa 3 de 6: Dados do Proprietário
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Digite seu nome completo"
                        value={formData.ownerName}
                        onChange={(e) => updateForm({ ownerName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          CPF *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="000.000.000-00"
                          value={formData.ownerCpf}
                          onChange={(e) => updateForm({ ownerCpf: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Data de Nascimento
                        </label>
                        <input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => updateForm({ birthDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contato */}
              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Etapa 4 de 6: Dados de Contato e Localização
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => updateForm({ city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phoneWhatsapp}
                        onChange={(e) => updateForm({ phoneWhatsapp: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com.br"
                        value={formData.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Resumo */}
              {step === 5 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Etapa 5 de 6: Resumo dos Dados
                  </h2>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                    <p><strong>Categoria:</strong> {formData.vehicleType.toUpperCase()}</p>
                    <p><strong>Veículo:</strong> {formData.brand || 'Não informado'} {formData.model}</p>
                    <p><strong>Placa:</strong> {formData.licensePlate || 'A informar na vistoria'}</p>
                    <p><strong>Proprietário:</strong> {formData.ownerName} ({formData.ownerCpf})</p>
                    <p><strong>Contato:</strong> {formData.phoneWhatsapp} | {formData.email}</p>
                    <p><strong>Localidade:</strong> {formData.city}/{formData.state}</p>
                  </div>
                </div>
              )}

              {/* STEP 6: Finalizar Solicitação */}
              {step === 6 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Etapa 6 de 6: Confirmar e Enviar
                  </h2>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs leading-relaxed space-y-2">
                    <p className="font-bold">Tudo pronto!</p>
                    <p>Sua cotação será processada para apresentação do plano mais econômico com assistência 24h em todo o Brasil.</p>
                  </div>

                  <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.acceptedTerms}
                      onChange={(e) => updateForm({ acceptedTerms: e.target.checked })}
                      className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                    />
                    <span>Aceito receber contato comercial da Harmony Clube referente a esta cotação.</span>
                  </label>
                </div>
              )}

              {/* Bottom Buttons Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                ) : <div />}

                {step < 6 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-orange-500 hover:bg-orange-600 shadow-md transition-all flex items-center gap-1.5"
                  >
                    Próximo Passo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.acceptedTerms}
                    className="px-8 py-3.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    ENVIAR COTAÇÃO
                  </button>
                )}
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};

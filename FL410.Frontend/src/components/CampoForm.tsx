
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

// Defina o tipo para as opções de registro de campo
interface ICampoOptions {
    id: string;
    label: string;
    flexBasis: string;
    text?: { placeholder: string; helper?: string };
    select?: { options: { valor: string; label: string }[] };
    radio?: { options: { valor: string; label: string }[] };
    registerOptions?: RegisterOptions<Record<string, string>>; // Manter o tipo desejado
    value: string;
    erros?: string;
}

// Interface principal que utiliza ICampoOptions para os campos
export interface ICampoForm {
    campos: ICampoOptions[];
}

export interface CampoFormProps {
    id: string;
    label: string;
    flexBasis: string;
    text?: { placeholder: string, helper?: string };
    select?: { options: { valor: string, label: string }[] };
    radio?: { options: { valor: string, label: string }[] };
    register?:  UseFormRegisterReturn;
    value: string;
    erros?: string;
}


export default function CampoForm({ id, label, flexBasis, text, select, radio, register, erros, value }: CampoFormProps) {

    return (
        <div className={`${flexBasis} h-20`}>
            <div className="grid m-1">
                {text && (
                    <>
                        <label className="font-medium text-sm" title={label} htmlFor={id}>{label}{text.helper && <span className="text-xs text-gray-400">  {text.helper}</span>}</label>
                        <input className="border p-2 rounded-md hover:border-blue-500 shadow" {...register} type="text" id={id} placeholder={text.placeholder} />
                        {erros && <span className="text-red-500 text-xs">{erros}</span>}
                    </>
                )
                }
                {select && (
                    <>
                        <label className="font-medium text-sm" htmlFor={id}>{label}</label>
                        <select className="border p-2 rounded-md hover:border-blue-500 shadow" defaultValue={value}  {...register} id={id}>
                            {select.options.map((option) => {
                                return (
                                    <option key={id + "_" + option.label} value={option.valor} >{option.label}</option>
                                )
                            })}
                        </select>
                    </>
                )
                }
                {radio && (
                    <>
                        <label className="font-medium text-sm" htmlFor={id}>{label}</label>
                        <div className="flex justify-around p-2">
                            {radio.options.map((option) => {
                                return (
                                    <div key={option.valor} className="flex items-center gap-2">
                                        <input type="radio" className="focus:ring-blue-500 w-4 h-4 border-8" {...register} id={option.valor} value={option.valor} />
                                        <label htmlFor={option.valor}>{option.label}</label>
                                    </div>
                                )
                            })}
                        </div>

                    </>
                )}

            </div>

        </div>
    )

}
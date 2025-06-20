import { useRef, useState, useEffect } from 'react';
import "./CodeVer.css";
import { AllowedPattern } from './AllowedPattern';


interface Props {
    expectedCode: string,
    onValid: () => void,
    allowedPattern: AllowedPattern
    cellCssClass?: string,
    splitChar?: string
}

function CodeVer({ expectedCode, onValid, allowedPattern, cellCssClass, splitChar }: Props) {
    const [codes, setCodes] = useState<string[]>(["", "", "", "", "", ""]);
    const refs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null)
    ];

    // Check validity whenever codes change
    useEffect(() => {
        const enteredCode = codes.join('');
        if (enteredCode.length === 6 && enteredCode === expectedCode) {
            onValid();
        }
    }, [codes, expectedCode, onValid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        // Only allow single digit input
        if (value.length > 1) return;

        const newCodes = [...codes];
        newCodes[index] = value;
        setCodes(newCodes);

        if (value && index < 5 && refs[index + 1].current) {
            refs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !codes[index] && index > 0 && refs[index - 1].current) {
            refs[index - 1].current?.focus();
        }
    };

    const getAllowedPattern = () => {
        if (allowedPattern == AllowedPattern.AlphaOnly) {
            return "[A-Za-z]*";
        }
        if (allowedPattern == AllowedPattern.NumbersOnly) {
            return "[0-9]*";
        }
        return "[A-Za-z0-9]*";
    }


    return (
        <div className="code-container">
            {codes.map((code, index) => (
                <span key={index}>
                    <input
                        key={index}
                        className={cellCssClass === "" || cellCssClass == undefined ? 'code-text' : cellCssClass}
                        ref={refs[index]}
                        value={code}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        maxLength={1}
                        type="text"
                        inputMode={allowedPattern == AllowedPattern.NumbersOnly ? "numeric" : "text"}
                        pattern={getAllowedPattern()}
                    />
                    {index === 2 && <span>{splitChar === "" || splitChar == undefined ? '-' : splitChar[0]} </span>}
                </span>
            ))}
        </div>
    );
}

export default CodeVer;
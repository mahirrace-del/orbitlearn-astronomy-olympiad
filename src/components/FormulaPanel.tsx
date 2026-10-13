import React from 'react';
import { FormulaDetails } from '../types';
import { Sigma, CheckCircle, AlertTriangle } from 'lucide-react';

interface FormulaPanelProps {
  formula: FormulaDetails;
}

export const FormulaPanel: React.FC<FormulaPanelProps> = ({ formula }) => {
  return (
    <div className="formula-panel-card">
      <div className="formula-header">
        <div className="formula-icon-box">
          <Sigma size={20} />
        </div>
        <div>
          <h3 className="formula-title">Maths & Physics Formula</h3>
          <p className="formula-desc">{formula.description}</p>
        </div>
      </div>

      <div className="formula-display">
        <code className="formula-code">{formula.formula}</code>
      </div>

      <div className="variables-section">
        <h4 className="section-subheading">Variables & Units:</h4>
        <ul className="variables-list">
          {formula.variables.map((v, i) => (
            <li key={i} className="variable-item">
              <span className="var-symbol">{v.symbol}</span>
              <span className="var-meaning">{v.meaning}</span>
              <span className="var-unit">({v.unit})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="worked-example-box">
        <h4 className="worked-title">
          <CheckCircle size={16} /> Fully Worked Example
        </h4>
        <p className="worked-problem">{formula.workedExample.problem}</p>
        <ol className="step-list">
          {formula.workedExample.stepByStep.map((step, idx) => (
            <li key={idx} className="step-item">
              {step}
            </li>
          ))}
        </ol>
        <div className="worked-result">
          <strong>Final Result:</strong> {formula.workedExample.result}
        </div>
      </div>

      <div className="units-reminder-box">
        <AlertTriangle size={18} className="reminder-icon" />
        <div className="reminder-content">
          <strong>Check the Units Reminder:</strong>
          <p>{formula.unitsReminder}</p>
        </div>
      </div>
    </div>
  );
};

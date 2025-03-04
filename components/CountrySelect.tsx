'use client';

import { useState } from 'react';
import Select, { components, OptionProps, SingleValueProps } from 'react-select';
import { Country, countries } from '@/lib/countries';

interface CountrySelectProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  language?: 'ar' | 'en' | 'fr';
}

const CountrySelect = ({ onChange, value, placeholder = 'اختر دولتك', language = 'ar' }: CountrySelectProps) => {
  const options = countries.map(country => ({
    value: country.code,
    label: language === 'ar' ? country.nameAr : 
           language === 'fr' ? country.nameFr || country.name : 
           country.name,
    flag: country.flag
  }));

  const selectedOption = options.find(option => option.value === value);

  const CustomOption = (props: OptionProps<any>) => (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <span className="text-xl">{props.data.flag}</span>
        <span>{props.data.label}</span>
      </div>
    </components.Option>
  );

  const CustomSingleValue = (props: SingleValueProps<any>) => (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-2">
        <span className="text-xl">{props.data.flag}</span>
        <span>{props.data.label}</span>
      </div>
    </components.SingleValue>
  );

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(option) => onChange(option ? option.value : '')}
      placeholder={placeholder}
      components={{
        Option: CustomOption,
        SingleValue: CustomSingleValue
      }}
      styles={{
        control: (base) => ({
          ...base,
          padding: '0.375rem',
          borderColor: '#D1D5DB',
          '&:hover': {
            borderColor: '#9CA3AF'
          }
        }),
        menu: (base) => ({
          ...base,
          zIndex: 100
        })
      }}
      className={language === 'ar' ? "text-right" : "text-left"}
    />
  );
};

export default CountrySelect;
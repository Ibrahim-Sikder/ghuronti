'use client';
import * as React from 'react';
import { useAutocomplete, AutocompleteGroupedOption } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { blue, grey } from '@mui/material/colors';

type Airport = {
  code: string;
  city: string;
  country: string;
  airport: string;
};

type ZRFAirportAutocompleteProps = {
  name: string;
  label: string;
  options: Airport[];
  sx?: React.CSSProperties;
};

const ZRFAirportAutocomplete: React.FC<ZRFAirportAutocompleteProps> = ({
  name,
  label,
  options,
  sx,
}) => {
  const [value, setValue] = React.useState<Airport | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
  } = useAutocomplete<Airport>({
    id: name,
    options,
    getOptionLabel: (option) => `${option.city} (${option.code}) - ${option.airport}`,
    value,
    inputValue,
    onInputChange: (_, newInputValue) => {
      setInputValue(newInputValue);
    },
    onChange: (_, newValue) => {
      setValue(newValue);
      if (newValue === null) {
        setInputValue('');
      }
    },
  });

  const inputProps = {
    ...getInputProps(),
    ref: (node: HTMLInputElement | null) => {
      const { ref } = getInputProps() as { ref: React.Ref<HTMLInputElement> };
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
    },
  };

  // Type guard to check if an option is an Airport
  const isAirport = (option: Airport | AutocompleteGroupedOption<Airport>): option is Airport => {
    return 'code' in option && 'city' in option && 'country' in option;
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    setValue(null);
    setInputValue('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div style={{ position: 'relative', width: '320px', ...sx }}>
      <Label {...getInputLabelProps()}>{label}</Label>
      <Root
        {...getRootProps()}
        className={focused ? 'Mui-focused' : ''}
      >
        {value ? (
          <SelectedItem>
            {value.city} ({value.code}) - {value.airport}
            <CloseButton onClick={handleClear}>
              <CloseIcon />
            </CloseButton>
          </SelectedItem>
        ) : (
          <Input
            {...inputProps}
            placeholder="Type a city or airport code..."
          />
        )}
      </Root>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            if (!isAirport(option)) return null;

            return (
              <Option
                {...getOptionProps({ option, index })}
                key={`${option.code}-${option.city}`}

              >
                <span key={option.code} style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {option.code}
                </span>
                {' | '}
                {option.city}, {option.country}
                {' - '}
                <span key={`${option.code}-${option.city}`} style={{ color: grey[600], fontSize: '12px' }}>
                  {option.airport}
                </span>
              </Option>
            );
          })}
        </Listbox>
      )}

    </div>
  );
};

// Styled components
const Label = styled('label')`
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Root = styled('div')`
  font-family: 'IBM Plex Sans', sans-serif;
  border-radius: 8px;
  color: ${grey[700]};
  background: #fff;
  border: 1px solid ${grey[300]};
  display: flex;
  align-items: center;
  padding-right: 5px;
  overflow: hidden;
  width: 100%;
  &.Mui-focused {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${blue[200]};
  }
`;


export default ZRFAirportAutocomplete;

// Rest of the styled components remain the same...


const SelectedItem = styled('div')`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  flex: 1;
`;

const CloseButton = styled('button')`
  background: none;
  border: none;
  margin-left: 8px;
  cursor: pointer;
  color: inherit;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${blue[500]};
  }
`;

const Input = styled('input')`
  font-size: 0.875rem;
  padding: 8px 12px;
  flex: 1;
  border: none;
  outline: none;
`;

const Listbox = styled('ul')`
  position: absolute;
  width: 100%;
  max-height: 300px;
  margin: 0;
  padding: 6px;
  list-style: none;
  overflow-y: auto;
  background: white;
  border: 1px solid ${grey[300]};
  border-radius: 8px;
  z-index: 1;
  margin-top: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Option = styled('li')`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${blue[50]};
  }
`;

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
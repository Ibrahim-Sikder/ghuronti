'use client'
import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { blue, grey } from '@mui/material/colors';

type Airport = {
  code: string;
  city: string;
  country: string;
  airport: string;
};

export default function AirportAutocomplete() {
  const [value, setValue] = React.useState<Airport | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions = [],
    focused,
  } = useAutocomplete<Airport>({
    id: 'airport-autocomplete',
    options: airports,
    getOptionLabel: (option) => option.city,
    value,
    inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    onChange: (event, newValue) => {
      setValue(newValue);
      setInputValue('');
    },
  });

  // Safe focus handling
  const focusInput = React.useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClose = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setValue(null);
    setInputValue('');
    // Use requestAnimationFrame for more reliable focus
    requestAnimationFrame(() => {
      focusInput();
    });
  }, []);

  // Handle click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        // Click is outside component
        setValue(null);
        setInputValue('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <div style={{ position: 'relative', width: '320px' }}>
      <Label {...getInputLabelProps()}>Search Airports</Label>
      <Root
        ref={rootRef}
        {...rootProps}
        className={focused ? 'Mui-focused' : ''}
      >
        {value ? (
          <SelectedItem>
            {value.city} ({value.code})
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
          </SelectedItem>
        ) : (
          <Input
            sx={{ height: '50px', width: '400px', borderRadius: '10px' }}
            {...inputProps}
            placeholder="Type a city or airport code..."
          />
        )}
      </Root>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            if ((option as Airport).code) {
              const airportOption = option as Airport;
              return (
                <Option
                  {...getOptionProps({ option: airportOption, index })}
                  key={airportOption.code}
                >
                  <div className='flex items-center gap-x-2'>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {airportOption.code} 
                    </span>
                    <span>|</span>
                    <div className='flex flex-col'>
                      <b className='block'>{airportOption.city}</b>
                      <span style={{ fontSize: '12px', color: grey[600] }}>
                        {airportOption.country}, {airportOption.airport.slice(0,20)}...
                      </span>
                    </div>
                  </div>
                </Option>
              );
            }
            return null;
          })}
        </Listbox>
      )}
    </div>
  );
}

// CloseIcon component (since we removed the MUI dependency)
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

// Rest of the styled components remain the same
const airports: Airport[] = [
  { code: 'DAC', city: 'Dhaka', country: 'Bangladesh', airport: 'Hazrat Shahjalal International Airport' },
  { code: 'CXB', city: 'Cox\'s Bazar', country: 'Bangladesh', airport: 'Cox\'s Bazar Airport' },
  { code: 'JFK', city: 'New York', country: 'United States', airport: 'John F. Kennedy International Airport' },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand', airport: 'Suvarnabhumi Airport' },
  { code: 'KUL', city: 'Kuala Lumpur', country: 'Malaysia', airport: 'Kuala Lumpur International Airport' },
];

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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Option = styled('li')`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${blue[50]};
  }
`;
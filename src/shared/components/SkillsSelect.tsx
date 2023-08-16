import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form';
import { iJunFields, iSkill } from '../interfaces';

interface iProps {
  field: ControllerRenderProps<any, 'skills'>;
  skills: any;
  setter: UseFormSetValue<any>;
}

function SkillsSelect({ field, skills, setter }: iProps) {
  const handleClear = () => {
    setter('skills', []);
  };

  return (
    <FormControl>
      <InputLabel id='multiple-chip-label'>Skills</InputLabel>
      <Select
        labelId='multiple-chip-label'
        id='demo-multiple-chip'
        multiple
        {...field}
        input={<OutlinedInput id='select-multiple-chip' label='Skills' />}
        renderValue={(selected: string[]) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} variant='outlined' />
            ))}
          </Box>
        )}
        MenuProps={{ sx: { maxHeight: '20rem' } }}
      >
        {skills.items.map((skill: iSkill) => (
          <MenuItem key={skill.id} value={skill.name}>
            {skill.name}
          </MenuItem>
        ))}
      </Select>

      {field.value.length !== 0 && (
        <FormHelperText sx={{ textAlign: 'right' }}>
          <Button size='small' onClick={handleClear} variant='text'>
            Clear selected.
          </Button>
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default SkillsSelect;

// @flow

import React from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"
import Button from "@mui/material/Button"
import { useSettings } from "../SettingsProvider"
import { Stack } from "@mui/material"

export const SettingsDialog = ({ open, onClose }) => {
  const settings = useSettings()
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={() => {}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Configuración"}</DialogTitle>
      <DialogContent>
        <Stack>
          <FormControl>
            <FormLabel>Mostrar punto de mira</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                checked={settings.showCrosshairs}
                control={<Radio />}
                label="Si"
                onChange={() => settings.changeSetting("showCrosshairs", true)}
              />
              <FormControlLabel
                checked={!settings.showCrosshairs}
                control={<Radio />}
                label="No"
                onChange={() => settings.changeSetting("showCrosshairs", false)}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl>
            <FormLabel>Mostrar cuadro resaltado</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                checked={settings.showHighlightBox}
                control={<Radio />}
                label="Si"
                onChange={() =>
                  settings.changeSetting("showHighlightBox", true)
                }
              />
              <FormControlLabel
                checked={!settings.showHighlightBox}
                control={<Radio />}
                label="No"
                onChange={() =>
                  settings.changeSetting("showHighlightBox", false)
                }
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SettingsDialog

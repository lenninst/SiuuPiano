'use client';

import { useEffect } from 'react';
import { WebMidi } from 'webmidi';

export default function MidiComponent() {
  useEffect(() => {
    WebMidi.enable()
      .then(() => {
        console.log('✅ WebMidi habilitado');

        // Listar entradas disponibles
        // esto se puede usar para verificar si el dispositivo MIDI está conectado
        WebMidi.inputs.forEach((input) => {
          console.log('🎹 Detectado:', input.name);

          // Escuchar notas
          input.addListener('noteon', (e) => {
            // console.log(`Nota ON: ${e.note.name}${e.note.octave}, Velocidad: ${e.velocity}`);
          });

          input.addListener('noteoff', (e) => {
            console.log(`Nota OFF: ${e.note.name}${e.note.octave}`);
          });
        });
      })
      .catch((err) => console.error('❌ Error habilitando WebMidi:', err));
  }, []);

  return <div></div>;
}

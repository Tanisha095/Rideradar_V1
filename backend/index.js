const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const axios = require('axios');

const port = new SerialPort({ path: 'COM4', baudRate: 115200 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// SUPABASE DETAILS
const SUPABASE_URL = 'https://ynpgfskszkhfclwgcveq.supabase.co/rest/v1/buses';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlucGdmc2tzemtoZmNsd2djdmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNjg5MzgsImV4cCI6MjA5OTk0NDkzOH0.A8EbR1g1rzee6N4nSJeyeXk-NPcITD7ATYqAFh06ePc';

parser.on('data', async (data) => {
    console.log("Received:", data);

    try {
        const [lat, lng] = data.split(',');

        const response = await axios.post(
            SUPABASE_URL,
            {
                id: "tbeam_001",
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            {
                headers: {
                    apikey: SUPABASE_KEY,
                    Authorization: `Bearer ${SUPABASE_KEY}`,
                    'Content-Type': 'application/json',
                    Prefer: 'resolution=merge-duplicates'
                }
            }
        );

        console.log("Sent to Supabase:", response.status);
    } catch (err) {
        console.error("Error:", err.message);
    }
});
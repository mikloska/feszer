import React, { useState, createContext, useEffect } from 'react';
const AppContext = createContext();
const [language, setLanguage] = useState('MAGYAR')
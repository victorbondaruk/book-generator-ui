# book-generator-ui - Análisis y Plan de Actualización

## Fecha: 12 de Diciembre de 2025

## Análisis Comparativo

### Estado Actual vs Flowise viejo

| Aspecto | Flowise viejo (3.0.12) | book-generator-ui (1.0.0) |
|---------|------------------------|---------------------------|
| Estructura src/ | ✅ Idéntica | ✅ Idéntica |
| React | 18.2.0 | 18.2.0 |
| MUI | 5.15.0 | 5.15.0 |
| Vite | 5.0.2 | 5.2.0 |
| ReactFlow | 11.5.6 | 11.5.6 |
| Embed packages | flowise-* | book-generator-* ✅ |

La estructura es idéntica. El renombrado ya está hecho.

---

## Plan de Actualización de Dependencias

### Dependencias Principales - Actualizar a Últimas Versiones

| Dependencia | Actual | Nueva Versión | Breaking Changes |
|-------------|--------|---------------|------------------|
| react | 18.2.0 | **19.2.3** | Sí - ver migración |
| react-dom | 18.2.0 | **19.2.3** | Sí |
| @mui/material | 5.15.0 | **7.3.6** | Sí - MUI 7 |
| @mui/icons-material | 5.15.0 | **7.3.6** | Sí |
| @mui/lab | 5.0.0-alpha.156 | **7.0.0-beta.6** | Sí |
| @mui/base | 5.0.0-beta.40 | Deprecated → @mui/material | Usar @mui/material |
| @mui/x-data-grid | 6.8.0 | **7.31.0** | Sí |
| @mui/x-tree-view | 7.25.0 | **7.31.0** | Minor |
| vite | 5.2.0 | **7.2.7** | Sí |
| @vitejs/plugin-react | 4.2.0 | **5.1.2** | Minor |
| react-router-dom | 6.3.0 | **7.10.1** | Sí - v7 |
| react-router | 6.3.0 | **7.10.1** | Sí |
| @reduxjs/toolkit | 2.2.7 | **2.11.1** | Minor |
| reactflow | 11.5.6 | **@xyflow/react 12.10.0** | Sí - renombrado |
| framer-motion | 4.1.13 | **12.23.26** | Sí - motion |
| recharts | 2.12.6 | **3.5.1** | Sí |
| formik | 2.2.6 | **2.4.9** | Minor |
| @emotion/react | 11.10.6 | **11.14.0** | Minor |
| @emotion/styled | 11.10.6 | **11.14.1** | Minor |
| react-markdown | 8.0.6 | **10.1.0** | Sí |
| @tiptap/react | 2.11.5 | **3.13.0** | Sí |
| @tabler/icons-react | 3.30.0 | **3.35.0** | Minor |

### DevDependencies - Actualizar

| Dependencia | Actual | Nueva Versión |
|-------------|--------|---------------|
| typescript | 5.4.5 | **5.9.3** |
| sass | 1.42.1 | **1.96.0** |
| rimraf | 5.0.5 | **6.0.1** |
| @testing-library/react | 14.0.0 | **16.3.0** |
| rollup | 4.13.0 | **4.40.0** |
| eslint | No incluido | **9.39.1** |
| vitest | No incluido | **4.0.15** |

### Nuevas Dependencias a Añadir

```json
{
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.0",
  "eslint": "^9.39.1",
  "vitest": "^4.0.15",
  "@vitest/coverage-v8": "^4.0.15",
  "globals": "^16.2.0"
}
```

### Dependencias a Eliminar

- `@mui/base` - Deprecated, usar @mui/material
- `react-scripts` - No necesario con Vite
- `@babel/eslint-parser` - Usar ESLint 9 nativo
- `@babel/plugin-proposal-private-property-in-object` - Ya estable
- `pretty-quick` - Usar lint-staged

---

## Migraciones Requeridas

### 1. React 18 → React 19
- Actualizar imports de `react-dom/client`
- Nuevo sistema de refs
- `use()` hook disponible

### 2. MUI 5 → MUI 7
- Nuevo sistema de theming
- Cambios en Grid (v2)
- Nuevos componentes

### 3. ReactFlow → @xyflow/react
- Cambiar import de `reactflow` a `@xyflow/react`
- Actualizar tipos
- Nuevas APIs

### 4. React Router 6 → 7
- Nueva sintaxis de rutas
- `createBrowserRouter` recomendado
- Cambios en loaders/actions

### 5. Framer Motion → Motion 12
- Nuevo nombre de paquete
- APIs actualizadas

---

## CI/CD y Testing

### GitHub Actions Workflows
- ci.yml - Lint, test, build
- publish.yml - Deploy

### Tests
- Vitest 4.0.15
- @testing-library/react 16.3.0
- Coverage con @vitest/coverage-v8

### Linting
- ESLint 9.39.1 flat config
- Prettier 3.7.4

---

## Archivos a Crear/Modificar

1. `package.json` - Actualizar dependencias
2. `eslint.config.js` - ESLint 9 flat config
3. `.prettierrc` - Configuración Prettier
4. `vitest.config.js` - Testing config
5. `tsconfig.json` - TypeScript config
6. `.github/workflows/ci.yml` - CI
7. `.github/workflows/publish.yml` - Deploy
8. `vite.config.js` - Actualizar para Vite 7
9. Migrar imports de ReactFlow → @xyflow/react
10. Actualizar theming de MUI

---

## Notas Importantes

1. **Mantener compatibilidad**: La UI debe seguir funcionando con el server existente
2. **API endpoints**: No cambian, son del server
3. **book-generator-react-json-view**: Ya actualizado y listo
4. **book-generator-embed**: Workspace dependency
5. **book-generator-embed-react**: Workspace dependency

---

## Siguiente Paso

Ejecutar actualizaciones en este orden:
1. Actualizar package.json con nuevas versiones
2. Crear archivos de configuración (ESLint, Vitest, etc.)
3. Migrar ReactFlow → @xyflow/react
4. Migrar React Router 6 → 7
5. Actualizar MUI 5 → 7
6. Actualizar Framer Motion → Motion 12
7. Crear workflows de GitHub Actions
8. Probar build

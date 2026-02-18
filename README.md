# Bad Bunny x Super Bowl LX Dashboard

Dashboard d'analyse de l'impact culturel, musical, économique et politique de la performance de Bad Bunny au Halftime Show du Super Bowl LX (8 février 2026).

## Stack technique

- **Backend** : FastAPI (Python) avec cache JSON local
- **Frontend** : React 18 + TypeScript + Vite + Tailwind CSS
- **Visualisations** : Recharts

## Sources de données

| Source | Type | Auth requise |
|--------|------|-------------|
| Wikipedia Pageviews | API REST Wikimedia | Non |
| Google Trends | pytrends (unofficial) | Non |
| YouTube Data API v3 | API officielle | API Key |
| Spotify Web API | API officielle | OAuth Client Credentials |
| Données politiques | Données statiques curées | Non |

## Installation

### Backend

```bash
cd backend
cp .env.example .env
# Éditer .env avec vos clés API (optionnel - Wikipedia et Google Trends fonctionnent sans clés)
pip install -r requirements.txt
uvicorn main:app --reload
```

API disponible sur http://localhost:8000 - Documentation auto: http://localhost:8000/docs

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Dashboard disponible sur http://localhost:5173

## Configuration API Keys (optionnel)

Le dashboard fonctionne partiellement sans clés API. Pour les fonctionnalités complètes :

- **YouTube** : Créer un projet sur [Google Cloud Console](https://console.cloud.google.com), activer YouTube Data API v3, créer une API Key
- **Spotify** : Créer une app sur [Spotify Developer Dashboard](https://developer.spotify.com/dashboard), récupérer Client ID et Client Secret

## Sections du dashboard

1. **Impact Culturel** - Google Trends + Wikipedia pageviews
2. **Impact Musical** - Spotify top tracks + YouTube views + proxy streams
3. **Impact Économique** - Tendances vols vers Puerto Rico + merchandise
4. **Impact Politique** - Sondages, engagement politique latino, chronologie

## Endpoints API

- `GET /api/health` - Status des services
- `GET /api/cultural/google-trends` - Tendances Google "Bad Bunny"
- `GET /api/cultural/wikipedia` - Pages vues Wikipedia
- `GET /api/cultural/summary` - Résumé impact culturel
- `GET /api/musical/spotify` - Données Spotify
- `GET /api/musical/youtube` - Stats vidéos YouTube
- `GET /api/musical/trends` - Proxy streams via Google Trends
- `GET /api/economic/flights` - Tendances vols Puerto Rico
- `GET /api/economic/merch` - Tendances merchandise
- `GET /api/economic/summary` - Résumé impact économique
- `GET /api/political/polls` - Sondages
- `GET /api/political/latino-engagement` - Engagement politique
- `GET /api/political/context` - Contexte et chronologie
- `GET /api/export/{section}` - Export CSV

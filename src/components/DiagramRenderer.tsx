import React from 'react';
import { CellDiagram } from './diagrams/CellDiagrams';
import { ClassificationDiagram } from './diagrams/ClassificationDiagrams';
import { TransportCellDiagram } from './diagrams/TransportCellDiagrams';
import { FoodTestsDiagram } from './diagrams/FoodTestsDiagrams';
import { EnzymeDiagram } from './diagrams/EnzymeDiagrams';
import { PlantNutritionDiagram, PlantTransportDiagram, PlantTropismDiagram } from './diagrams/PlantPhysiologyDiagrams';
import { HumanNutritionDiagram, GasExchangeDiagram, RespirationDiagram, CirculationDiagram } from './diagrams/HumanPhysiologyDiagrams';
import { ImmunityDiagram, ExcretionDiagram, CoordinationDiagram } from './diagrams/ExcretionAndCoordinationDiagrams';
import { ReproductionDiagram, GeneticsDiagram, BiotechnologyDiagram, EcologyDiagram } from './diagrams/GeneticsAndBiotechDiagrams';

interface DiagramRendererProps {
  diagramType?: string;
}

export const DiagramRenderer: React.FC<DiagramRendererProps> = ({ diagramType }) => {
  if (!diagramType) return null;

  switch (diagramType) {
    case 'cells':
      return <CellDiagram />;
    case 'classification':
      return <ClassificationDiagram />;
    case 'transport_cell':
      return <TransportCellDiagram />;
    case 'food_tests':
      return <FoodTestsDiagram />;
    case 'enzymes':
      return <EnzymeDiagram />;
    case 'plant_nutrition':
      return <PlantNutritionDiagram />;
    case 'plant_transport':
      return <PlantTransportDiagram />;
    case 'human_nutrition':
      return <HumanNutritionDiagram />;
    case 'gas_exchange':
      return <GasExchangeDiagram />;
    case 'respiration':
      return <RespirationDiagram />;
    case 'circulation':
      return <CirculationDiagram />;
    case 'immunity':
      return <ImmunityDiagram />;
    case 'excretion':
      return <ExcretionDiagram />;
    case 'coordination':
      return <CoordinationDiagram />;
    case 'plant_tropism':
      return <PlantTropismDiagram />;
    case 'reproduction':
      return <ReproductionDiagram />;
    case 'genetics':
      return <GeneticsDiagram />;
    case 'biotech':
      return <BiotechnologyDiagram />;
    case 'ecology':
      return <EcologyDiagram />;
    default:
      return null;
  }
};
